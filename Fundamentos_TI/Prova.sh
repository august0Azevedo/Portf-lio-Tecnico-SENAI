#!/bin/bash
var=$(ls -ld $1)
mostrar=${var:1:3}
echo $mostrar
