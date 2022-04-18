#!/bin/bash
DIRNAME=${1:-.}
cd $DIRNAME

FILES=$(mktemp)
PACKAGES=$(mktemp)

find . \
    -path ./node_modules -prune -or \
    -path ./build -prune -or \
    \( -name "*.ts" -or -name "*.js" -or -name "*.json" \) -print > $FILES

function check {
    RED='\033[0;31m'
    GREEN='\033[0;32m'
    NC='\033[0m'
    cat package.json \
        | jq "{} + .$1 | keys" \
        | sed -n 's/.*"\(.*\)".*/\1/p' > $PACKAGES

    echo "--------------------------"
    echo -e "\nChecking $1...\n"
    while read PACKAGE
    do
        RES=$(cat $FILES | xargs -I {} egrep -i "(import|require).*['\"]$PACKAGE[\"']" '{}' | wc -l)
        if [ $RES = 0 ]
        then
            echo -e "${RED}! UNUSED\t\t $PACKAGE${NC}"
        else
            echo -e "${GREEN}\xE2\x9C\x94 USED ($RES)\t $PACKAGE${NC}"
        fi
    done < $PACKAGES
}

check "dependencies"

echo -e "\nPurge complete."