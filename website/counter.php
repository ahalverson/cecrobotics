$views = 0;
$views_file = "viewcount.txt"

if (file_exits($views_file)) {
	$views = (int) file_get_contents($views_file)
}

views++;

file_put_contents($views_file, $views);