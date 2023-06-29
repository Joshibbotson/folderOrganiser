const fs = require("fs");

//put your target folder name in here i.e getPath('downloads') will return a path of "/Users/yourusername/downloads"
function getPath(targetFolder) {
    const user = require("os").userInfo().username;
    return `/Users/${user}/${targetFolder}`;
}

function recFolderCheck(currPath, targetFileArr, targetFolder) {
    const path = currPath
        ? `${getPath("downloads")}/${currPath}`
        : `${getPath("downloads")}`;

    fs.readdir(path, (err, files) => {
        if (!files) {
            return;
        }

        files.forEach(file => {
            if (targetFileArr.includes(file.toLowerCase())) {
                const oldPath = `${path}/${file}`;
                const newPath = `${getPath(
                    "downloads"
                )}/${targetFolder}/${file}`;

                fs.rename(oldPath, newPath, err => {
                    if (err) {
                        console.log(err);
                    }
                });
                return;
            }
        });

        const folders = files.filter(file => {
            return !file.includes(".");
        });

        folders.forEach(folder => {
            if (currPath) {
                recFolderCheck(
                    `${currPath}/${folder}`,
                    targetFileArr,
                    targetFolder
                );
            } else if (!currPath) {
                recFolderCheck(`${folder}`, targetFileArr, targetFolder);
            }
        });
    });
}

fs.watch(`${getPath("downloads")}`, (eventType, filename) => {
    //movies//
    recFolderCheck(
        null,
        [".bluray", ".720p", "1080p", "x264", "x265", "mkv", ".mp4"],
        "movies"
    );
    //pictures
    recFolderCheck(
        null,
        [".jpeg", ".jpg", ".png", ".webp", ".svg", ".heic"],
        "pictures"
    );
    recFolderCheck(null, [".pdf"], "movies");
    recFolderCheck(null, [".zip"], "zips");
    recFolderCheck(null, [".mp3"], "sounds");
    recFolderCheck(null, [".pkg", ".dmg"], "dmg_files");
});
