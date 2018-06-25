const fileTypes = {
    images: ['gif', 'bmp', 'jpeg', 'jpg', 'tiff', 'png', 'svg', 'ai', 'heif', 'psd'],
    videos: ['mp4', 'webm', 'flv', 'ogv', 'avi', 'mov', 'rmvb', 'amv', 'mkv', '3gp'],
    music: ['mp3', 'wav', 'aiff', 'aac', 'ogg', 'wma', 'flac', 'wma'],
}

let cache = {};
let cacheHit, cacheMiss;

const memoized = (fn) => {
    cacheHit = 0;
    cacheMiss = 0;
    let cache = {};
    return (...args) => {
        let n = args[0];
        if (n in cache) {
            cacheHit++;
            return cache[n];
        } else {
            cacheMiss++;
            let result = fn(n);
            cache[n] = result;
            return result;
        }
    }
}

function getType(ext) {
    for (const type of Object.keys(fileTypes)) {
        if (fileTypes[type].indexOf(ext.toLowerCase()) >= 0) {
            return type;
        }
    }
    return 'other';
}

const memoizedGetType = memoized(getType);

function filesSummary(input, useCache = false) {
    let summary = {
        images: 0,
        videos: 0,
        music: 0,
        other: 0
    };

    let fileList = input.split('\n');

    for (const entry of fileList) {
        entryArr = entry.split(' ');
        file = entryArr[0];
        size = entryArr[1];
        nameArr = file.split('.');
        const ext = nameArr[nameArr.length - 1];

        // attempt to optimize function
        let type;
        if (useCache) {
            type = memoizedGetType(ext);
        } else {
            type = getType(ext);
        }

        summary[type] += parseInt(size.replace(/[^\d]/ig, ''));
    }

    // if (useCache) console.log('cache HIT', cacheHit, 'cacheMiss', cacheMiss);

    return `images ${summary['images']}b\nvideos ${summary['videos']}b\nmusic ${summary['music']}b\nother ${summary['other']}b`;
}

module.exports = filesSummary;