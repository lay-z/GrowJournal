for folder in `ls -R`
do
	extension="${folder:${#folder}-2}"
	if [[ $extension = "js" ]] ; then
		echo $folder
	else
		echo "Not JS File"
	fi
done