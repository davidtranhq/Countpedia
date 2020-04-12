#include <iostream>
#include <fstream>
#include <regex>
#include <string>

void preprocess(std::ifstream &a, std::ifstream &b)
{
	std::ostringstream out {};
	std::stringstream paste {};
	paste << b.rdbuf(); // contents to paste
	std::stringstream buf {};
	buf << a.rdbuf(); // file to be preprocessed
	// match everything in the <div id="header></div>
	std::regex rgx("<div id=\"header\">([\\S\\s]*?)\\/div>");
	std::string buf_str {buf.str()};
	std::regex_replace(std::ostreambuf_iterator<char>(std::cout),
		buf_str.begin(), buf_str.end(), rgx, paste.str());
	
}

int main(int argc, char *argv[])
{
	std::string path1, path2;
	if (argc == 1)
	{
		std::cout << "File to preprocess: ";
		std::cin >> path1;
		std::cout << "File to paste ";
		std::cin >> path2;
	}
	else if (argc == 2)
	{
		path1 = argv[1];
		std::cout << "File to paste: ";
		std::cin >> path2;
	}
	else if (argc == 3)
	{
		path1 = argv[1];
		path2 = argv[2];
	}
	std::ifstream a {path1}, b {path2};
	if (!a)
	{
		std::cerr << "Could not open file: " << path1 << '\n';
		return -1;
	}
	if (!b)
	{
		std::cout << "Could not open file: " << path2 << '\n';
		return -1;
	}
	preprocess(a, b);
	return 0;
}