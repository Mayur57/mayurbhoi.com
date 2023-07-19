#!/bin/bash

echo "✅ Intialising feature commit script..."

GREEN='\033[0;32m'
NC='\033[0m'

echo -n "Enter the branch: "
read BRANCH

CBRANCH="${GREEN}${BRANCH}${NC}"

echo -e "\n> The selected branch is: ${CBRANCH}"

echo -e "\n> Enter the commit message: "
read COM_MSG

git add .
git commit -m "${COM_MSG}"
git push origin "${BRANCH}"

echo -e "\n👍 Commit made to ${CBRANCH} successfully: ${GREEN}${COM_MSG}${NC}"


gcb() {
    echo "✅ Intialising feature commit script..."
    GREEN='\033[0;32m'
    NC='\033[0m'
    echo -n "Enter the branch: "
    # read BRANCH
    CBRANCH="${GREEN}$1${NC}"
    echo -e "\n> The selected branch is: ${CBRANCH}"
    echo -e "\n> Enter the commit message: "
    read $2
    git add .
    git commit -m "$2"
    git push origin "$1"
    echo -e "\n👍 Commit made to ${CBRANCH} successfully: ${GREEN}$2${NC}"
}