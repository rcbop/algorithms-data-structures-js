/**
 * @jest-environment node
 */
const filesSummary = require('./index');

var timer = function (name) {
    var start = new Date();
    return {
        stop: function () {
            var end = new Date();
            var time = end.getTime() - start.getTime();
            console.log('Timer:', name, 'finished in', time, 'ms');
        }
    }
};

test('function filesSummary exists', () => {
    expect(typeof filesSummary).toEqual('function');
});

test('files test case 1', () => {
    const files = "myImage.jpg 10b\nmy.video.mp4 50b\nmaster.AIFF 20b\nv!ids.rmVb 30b";

    const summary = filesSummary(files);

    let expectedSummaryString = "images 10b\nvideos 80b\nmusic 20b\nother 0b";

    expect(summary).toEqual(expectedSummaryString);
});

test('files test case 2', () => {
    const files = "spiderman.zip 50000b\naudioRecording!.exe 10b\nnotes.from.last.meeting.txt 3b\nwork.ppt 30b\nyow.jpg 1b";

    const summary = filesSummary(files);

    let expectedSummaryString = "images 1b\nvideos 0b\nmusic 0b\nother 50043b";

    expect(summary).toEqual(expectedSummaryString);
});


let testMagnitude = 50000;

test('files big test case 3 NO CACHE', done => {
    
    let lotsOfFiles = "mycrazytest.GiF 5b\nmycrazytest.jpeg 5b\n".repeat(testMagnitude);

    const files = lotsOfFiles + "spiderman.mkv 50000b\naudioRecording!.aac 10b\n" +
        "my.#songs.from.mp4 30b\nfamily.jpg 2b\ngirlfriend.bmp 500b\nnotes.txt 30b";

    let time = timer('Benchmarking Files Summary NO CACHE');
    const summary1 = filesSummary(files);
    time.stop();

    let expectedSummaryString = `images ${testMagnitude * 10 + 502}b\nvideos 50030b\nmusic 10b\nother 30b`;

    expect(summary1).toEqual(expectedSummaryString);
    done();
});

test('files big test case 4 CACHED', done => {
    
    let lotsOfFiles = "mycrazytest.GiF 5b\nmycrazytest.jpeg 5b\n".repeat(testMagnitude);

    const files = lotsOfFiles + "spiderman.mkv 50000b\naudioRecording!.aac 10b\n" +
        "my.#songs.from.mp4 30b\nfamily.jpg 2b\ngirlfriend.bmp 500b\nnotes.txt 30b";

    let time = timer('Benchmarking Files Summary CACHED');
    const summary = filesSummary(files, true);
    time.stop();

    let expectedSummaryString = `images ${testMagnitude * 10 + 502}b\nvideos 50030b\nmusic 10b\nother 30b`;

    expect(summary).toEqual(expectedSummaryString);
    done();
});