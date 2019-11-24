#!/bin/bash

set -eu

RUN="docker run --rm cortezaproject/corteza-server"
LIST="tools/cli-commands.txt"
ADOC="src/maint/setup/cli-commands.adoc"

touch ${ADOC}
echo "" > ${ADOC}
cat ${LIST} | while read CMD; do
  echo -n "$CMD ..."
  OUT=$(${RUN} ${CMD} -h)
  echo -e ".${OUT}"|head -n  1 >> ${ADOC}
  echo "[source,shell]" >> ${ADOC}
  echo "----" >> ${ADOC}
  echo -e "${OUT}"|tail -n +2 >> ${ADOC}
  echo "----" >> ${ADOC}
  echo "" >> ${ADOC}
  echo
done
