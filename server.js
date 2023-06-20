const fs = require("fs");

//put your target folder name in here i.e getPath('downloads') will return a path of "/Users/yourusername/downloads"
function getPath(targetFolder) {
    const user = require("os").userInfo().username;
    return `/Users/${user}/${targetFolder}`;
}
//pictures
fs.readdir(getPath("downloads"), (err, files) => {
    files.forEach(file => {
        if (
            file.toLowerCase().includes("jpeg") ||
            file.toLowerCase().includes("jpg") ||
            file.toLowerCase().includes("png") ||
            file.toLowerCase().includes("webp") ||
            file.toLowerCase().includes("svg") ||
            file.toLowerCase().includes("heic")
        ) {
            const oldPath = `${getPath("downloads")}/${file}`;
            const newPath = `${getPath("downloads")}/pictures/${file}`;

            fs.rename(oldPath, newPath, err => {
                if (err) {
                    console.log(err);
                }
                console.log("succesfully moved files");
            });
        }
    });
});

//pdfs
fs.readdir(getPath("downloads"), (err, files) => {
    files.forEach(file => {
        if (file.toLowerCase().includes("pdf")) {
            const oldPath = `${getPath("downloads")}/${file}`;
            const newPath = `${getPath("downloads")}/pdf/${file}`;

            fs.rename(oldPath, newPath, err => {
                if (err) {
                    console.log(err);
                }
                console.log("succesfully moved files");
            });
        }
    });
});
//zips
fs.readdir(getPath("downloads"), (err, files) => {
    files.forEach(file => {
        if (file.includes("zip")) {
            const oldPath = `${getPath("downloads")}/${file}`;
            const newPath = `${getPath("downloads")}/zips/${file}`;

            fs.rename(oldPath, newPath, err => {
                if (err) {
                    console.log(err);
                }
                console.log("succesfully moved files");
            });
        }
    });
});

//sound files
fs.readdir(getPath("downloads"), (err, files) => {
    files.forEach(file => {
        if (file.includes("mp3")) {
            const oldPath = `${getPath("downloads")}/${file}`;
            const newPath = `${getPath("downloads")}/sounds/${file}`;

            fs.rename(oldPath, newPath, err => {
                if (err) {
                    console.log(err);
                }
                console.log("succesfully moved files");
            });
        }
    });
});
//movies files
fs.readdir(getPath("downloads"), (err, files) => {
    files.forEach(file => {
        if (
            file.toLowerCase().includes("mkv") ||
            file.toLowerCase().includes("mp4") ||
            file.toLowerCase().includes("mov")
        ) {
            const oldPath = `${getPath("downloads")}/${file}`;
            const newPath = `${getPath("downloads")}/movies/${file}`;

            fs.rename(oldPath, newPath, err => {
                if (err) {
                    console.log(err);
                }
                console.log("succesfully moved files");
            });
        }
    });
});

//dmg files
fs.readdir(getPath("downloads"), (err, files) => {
    files.forEach(file => {
        if (
            file.toLowerCase().includes("dmg") ||
            file.toLowerCase().includes("pkg")
        ) {
            const oldPath = `${getPath("downloads")}/${file}`;
            const newPath = `${getPath("downloads")}/dmg_files/${file}`;

            fs.rename(oldPath, newPath, err => {
                if (err) {
                    console.log(err);
                }
                console.log("succesfully moved files");
            });
        }
    });
});

//movie folders - note this is a poor way to achieve this, the correct way would be
//recurse through the folder until no directory left, check if any of the files
// have .mkv or some video file type, then get the path from the first directory under
//downloads
fs.readdir(getPath("downloads"), (err, files) => {
    files.forEach(file => {
        if (
            file.toLowerCase().includes("bluray") ||
            file.toLowerCase().includes("720p") ||
            file.toLowerCase().includes("1080p") ||
            file.toLowerCase().includes("x264") ||
            file.toLowerCase().includes("x265")
        ) {
            const oldPath = `${getPath("downloads")}/${file}`;
            const newPath = `${getPath("downloads")}/movies/${file}`;

            fs.rename(oldPath, newPath, err => {
                if (err) {
                    console.log(err);
                }
                console.log("successful folder move");
            });
        }
    });
});
