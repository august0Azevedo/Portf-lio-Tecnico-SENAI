#While
#!/bin/sh
input_string="hello"
while [[ $input_string != "bye" ]]
do
  echo "Please write something in (bye to quit)"
  read input_string
  echo "You typed: $input_string"
done

#While2
#!/bin/sh
while read input_text
do
  case $input_text in
        hello)          echo English    ;;
        howdy)          echo American   ;;
        gday)           echo Australian ;;
        bonjour)        echo French     ;;
        "guten tag")    echo German     ;;
        *)              echo Unknown Language: $input_text
                ;;
   esac
done ​< myfile.txt




