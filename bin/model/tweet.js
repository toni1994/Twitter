"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tweet = (function () {
    function Tweet(tweetAuthor, tweetAuthorTag, tweetTime, tweetText, tweetImageURL, tweetReply, tweetForward, tweetLove) {
        this.tweetAuthor = tweetAuthor;
        this.tweetAuthorTag = tweetAuthorTag;
        this.tweetTime = tweetTime;
        this.tweetText = tweetText;
        this.tweetImageURL = tweetImageURL;
        this.tweetReply = tweetReply;
        this.tweetForward = tweetForward;
        this.tweetLove = tweetLove;
    }
    return Tweet;
}());
exports.default = Tweet;
//# sourceMappingURL=tweet.js.map