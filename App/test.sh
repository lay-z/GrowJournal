for file in `ls ./Services/*.ts`
do
	echo $file
	mv $file "${file%.ts}.tsx"
done