<?php


// Delete Directory
$dirname = "scoreboard";

 function deleteDir($path) {
    return is_file($path) ?
            @unlink($path) :
            array_map(__FUNCTION__, glob($path.'/*')) == @rmdir($path);
}
deleteDir($dirname);

sleep(10);

$zip = new ZipArchive;
if ($zip->open('./scoreboard.zip') === TRUE) {
    $zip->extractTo('./');
    $zip->close();
    echo 'ok';
}

?>