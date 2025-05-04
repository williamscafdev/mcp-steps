#!/bin/bash

FEATURE_NAME=$1
PATH_NAME="YOUR-PATH-FOLDER-PRESENTATION"
# create feature folder
mkdir -p $PATH_NAME/$FEATURE_NAME/{screen,providers,states,widgets}
# create files in feature folder
touch $PATH_NAME/$FEATURE_NAME/$FEATURE_NAME.dart
touch $PATH_NAME/$FEATURE_NAME/screen/${FEATURE_NAME}_screen.dart
touch $PATH_NAME/$FEATURE_NAME/screen/screen.dart
touch $PATH_NAME/$FEATURE_NAME/providers/providers.dart
touch $PATH_NAME/$FEATURE_NAME/states/states.dart
touch $PATH_NAME/$FEATURE_NAME/widgets/widgets.dart
# add imports in feature folder
echo "export 'screen/screen.dart';" >> $PATH_NAME/$FEATURE_NAME/$FEATURE_NAME.dart
echo "export 'providers/providers.dart';" >> $PATH_NAME/$FEATURE_NAME/$FEATURE_NAME.dart
echo "export 'states/states.dart';" >> $PATH_NAME/$FEATURE_NAME/$FEATURE_NAME.dart
echo "export 'widgets/widgets.dart';" >> $PATH_NAME/$FEATURE_NAME/$FEATURE_NAME.dart
# add imports in screen folder and ui in screen folder
echo "import 'package:flutter/material.dart';

class ${FEATURE_NAME}Screen extends StatelessWidget {
  const ${FEATURE_NAME}Screen({super.key});

  @override
  Widget build(BuildContext context) {
    return Container();
  }
}" >> $PATH_NAME/$FEATURE_NAME/screen/${FEATURE_NAME}_screen.dart
# add imports in screen folder
echo "export '${FEATURE_NAME}_screen.dart';" >> $PATH_NAME/$FEATURE_NAME/screen/screen.dart
