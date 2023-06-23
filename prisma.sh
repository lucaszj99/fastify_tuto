mkdir -p ./prisma/temp

find ./prisma -name "*.part.prisma" -print0 | while IFS= read -r -d '' file; do
    # print file
    echo "$file"
    sed '/\/\/@relations/,$d' "$file" > "./prisma/temp/$(basename "$file")"
done
for file in ./prisma/root.prisma ./prisma/temp/*.part.prisma; do
    cat "$file"
    echo
done > ./prisma/schema.prisma

rm -rf ./prisma/temp
