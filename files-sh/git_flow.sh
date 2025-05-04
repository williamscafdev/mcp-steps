#!/bin/bash

FEATURE_NAME=$1
DESCRIPTION="new feature in presentation"

# validate if in the branch dev
git checkout dev
git pull origin dev
sleep 5
# create new branch
git checkout -b feat/${FEATURE_NAME}
sleep 5
# add files changes in branch
git add .
# commit changes
git commit -m "feat(${FEATURE_NAME}): add ${DESCRIPTION} feature"

# Empujar la nueva rama al repositorio remoto
git push --set-upstream origin "feat/${FEATURE_NAME}"
# create pull request
gh pr create --base dev --title "feat(${FEATURE_NAME}): add ${DESCRIPTION} feature" --body "This PR adds the ${DESCRIPTION} feature to the ${FEATURE_NAME} module."
