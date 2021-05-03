<?php

// the header of the output file
print "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\"
\"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">
<html xmlns=\"http://www.w3.org/1999/xhtml\" xml:lang=\"en\" lang=\"en\">
<head>
<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />
<title>My song list</title>
</head>
<body>
<h1>List of cool songs</h1>\n";

// the name of the example json file
$json_file="./example.json";

// load the contents of the json file into the string variable $file_contents
// if it fails, exit with an error message
$file_contents = file_get_contents($json_file) or exit($html_header."<p>Error: Can't open the profile file.</p>\n</body>\n</html>");

// transform the string into an array
$songlist=json_decode($file_contents,true);
if ($songlist == '') {
	exit("<p>Error: the string could not be transformed to a json array, maybe bad json syntax</p>\n</body>\n</html>");
}

// walk through the array and list it's contents
// in every iteration we can find the describtion of a song in $s
// and the song itself contains "artist", "title" and "year"
$html_contents="<p>list of songs</p>
<ul>\n";
foreach($songlist as $s) {
	$html_contents=$html_contents."<li>".$s[year].": ".$s[artist]." - ".$s[title]."</li>\n";
}
$html_contents=$html_contents."</ul>\n";

// now we want to correct the year of the Metallica song
// for that we walk through the array again and if we found the right song entry change the value
$index = 0;
foreach($songlist as $s) {
	// if the searched word "Metallica" can be found in the artist field, 
	// the returned position in the string is greater than 0
	if (strpos($s[artist],'Metallica') !== false) {
		// the change must be written into the main array, cause the $s var 
		// is only a temporary one
		// for this we use the index var
		$songlist[$index][year] = 1984;
	}
	$index++;
}

$html_contents=$html_contents."<p>list of songs (corrected)</p>
<ul>\n";
foreach($songlist as $s) {
	$html_contents=$html_contents."<li>".$s[year].": ".$s[artist]." - ".$s[title]."</li>\n";
}
$html_contents=$html_contents."</ul>";

// now write back the corrected data into the text file
// first try to open the text file in write mode, if that fails, exit with error message
$fh = fopen($json_file, 'w') or exit("<p>Error: No write permission for the json file.</p>\n</body>\n</html>");

// next transform the array back to a string
// the parameter JSON_PRETTY_PRINT makes the json file human readable (adds line breaks and indents) but is only available in php versions >= 5.4
// so for php versions < 5.4 use:
// $file_contents = json_encode($songlist);
// for php >= 5.4 use:
$file_contents = json_encode($songlist, JSON_PRETTY_PRINT);
// both commands always produce a correct json file but the second one looks nicer

// check if the transformation was successful
if ($file_contents == 'null') {
	exit("<p>Error: the json array could not be transformed to a string</p>\n</body>\n</html>");
}
// write into the file and then close it
fwrite($fh, $file_contents);
fclose($fh);

// print the html output
print "$html_contents
</body>
</html>";
?>
