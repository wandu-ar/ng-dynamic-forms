#!/bin/bash

# README: https://openapi-generator.tech/docs/generators/typescript-angular/

# Setear nombre de paquete
if [ -n "$1" ]; then # If first parameter passed then
  PACKAGE=$1
else
  echo Escribir nombre del paquete:
  read PACKAGE
fi

PACKAGE="${PACKAGE}-api-client"

NG_VER="$(ng version | grep @angular-devkit/core | awk '{print $2}')"

# Setear ruta al json
if [ -n "$2" ]; then # If second parameter passed then
  JSON_URL=$2
else
  # host.docker.internal en reemplazo de localhost, apunta al docker host
  JSON_URL="http://host.docker.internal:3000/docs-json"
fi

rm -rf ./projects/${PACKAGE}/src
mkdir ./projects/${PACKAGE}/src

OPTS="--additional-properties=ngVersion=${NG_VER},modelPropertyNaming=original,fileNaming=kebab-case,enumPropertyNaming=original,providedIn=none,useSingleRequestParameter=true"

MSYS_NO_PATHCONV=1 \
  docker run --rm \
  -v $(pwd):/local \
  openapitools/openapi-generator-cli:latest generate \
  -i $JSON_URL \
  -g typescript-angular \
  -o /local/projects/${PACKAGE}/src \
  --skip-validate-spec \
  $OPTS

if [[ ! -f ./projects/${PACKAGE}/src/api.module.ts ]] then
  echo "Swagger codegen fail"
  exit 1
fi


# Repair errors in files
# sed -i "s|^    encodeKey|    override encodeKey|" ./projects/${PACKAGE}/src/encoder.ts
# sed -i "s|^    encodeValue|    override encodeValue|" ./projects/${PACKAGE}/src/encoder.ts

# Repair services
for f in ./projects/${PACKAGE}/src/api/*.ts; do
  # Fix inline response imports
  # sed -i "s|/model/inline-response200|/model/inline-response-200|" $f
  # sed -i -E "s|/model/inline-response-200(\w+)|/model/inline-response-200-\1|" $f # \d no funca en sed

  # Repair class name
  sed -i -E "s|^export class (\w+)ApiService|export class \1Service|" $f # Revert first
  sed -i -E "s|^export class (\w+)Service|export class \1ApiService|" $f

  # Repair method names
  sed -i -E "s|^    public \w+Controller(\w+)\(|    public \1(|" $f
  sed -i -E "s|^    public ([A-Z])|    public \L\1|" $f
done

# Fix interface name
# for f in ./projects/${PACKAGE}/src/model/*.ts; do
#   sed -i -E "s|^export interface (.+) \{|export interface I\1 {|" $f
#   sed -i -E "s|([^I])PaginatedResponseDto|\1IPaginatedResponseDto|" $f
# done

# Repair barrel files
sed -i -E "s|(\w+)ApiService|\1Service|g" ./projects/${PACKAGE}/src/api/api.ts # Revert first
sed -i -E "s|(\w+)Service|\1ApiService|g" ./projects/${PACKAGE}/src/api/api.ts

# Repair module file
sed -i -E "s|(\w+)ApiService|\1Service|g" ./projects/${PACKAGE}/src/api.module.ts # Revert first
sed -i -E "s|(\w+)Service|\1ApiService|g" ./projects/${PACKAGE}/src/api.module.ts

# Repair paginated responses
# Make paginated dto as generic
# sed -i "s|import { ModelAny } from './model-any';||" ./projects/${PACKAGE}/src/model/paginated-response-dto.ts
# sed -i "s|export interface PaginatedResponseDto {|export interface PaginatedResponseDto<T = any> {|" ./projects/${PACKAGE}/src/model/paginated-response-dto.ts
# sed -i "s|data: Array<ModelAny>;|data: Array<T>;|" ./projects/${PACKAGE}/src/model/paginated-response-dto.ts

# Repair models
# for modelFile in ./projects/${PACKAGE}/src/model/*.ts; do
#   if grep -q "extends PaginatedResponseDto {" "$modelFile"; then
#     # Get paginated model
#     model=$(grep -oP "(?<=data\?: Array<)\w+?(?=>)" "$modelFile")
#     oldModel=$(grep -oP "(?<=export interface )\w+?(?= extends PaginatedResponseDto \{)" "$modelFile")
#     newModel="Paginated$model"
#     # Corregir
#     sed -i -E "s|export interface $oldModel .*|export type $newModel = PaginatedResponseDto<$model>;|g" "$modelFile"
#     # Eliminar
#     sed -i -E "s|data\?: Array.*||g" "$modelFile"
#     sed -i -E "s|^}.*||g" "$modelFile"
#     # Search in services files
#     for serviceFile in ./projects/${PACKAGE}/src/api/*.ts; do
#       if grep -q "$oldModel" "$serviceFile"; then
#         sed -i "s|<$oldModel>|<$newModel>|" "$serviceFile"
#         sed -i "s|import { $oldModel } from|import { $newModel } from|" "$serviceFile"
#       fi
#     done
#   fi
# done

# Repair type
cat > ./projects/${PACKAGE}/src/model/mixed.ts << EOF
export type Mixed = any;
EOF

cat > ./projects/${PACKAGE}/src/model/any.ts << EOF
export type Any = any;
EOF


# Remove unused elements
# cat > ./projects/${PACKAGE}/src/api/available-for-users.ts << EOF
# import { Injectable } from '@angular/core';
# @Injectable()
# export class AvailableForUsersApiService {}
# EOF

# cat > ./projects/${PACKAGE}/src/api/public-api.ts << EOF
# import { Injectable } from '@angular/core';
# @Injectable()
# export class PublicAPIApiService {}
# EOF

# cat > ./projects/${PACKAGE}/src/api/only-for-development-purpose.ts << EOF
# import { Injectable } from '@angular/core';
# @Injectable()
# export class OnlyForDevelopmentPurposeApiService {}
# EOF

# Custom code for this lib

cat > ./projects/${PACKAGE}/src/api/public-api.service.ts << EOF
import { Injectable } from '@angular/core';
@Injectable()
export class PublicAPIApiService {}
EOF

cat > ./projects/${PACKAGE}/src/api/available-for-users.service.ts << EOF
import { Injectable } from '@angular/core';
@Injectable()
export class AvailableForUsersApiService {}
EOF

# End of custom code for this lib


ng build ${PACKAGE}
