/**
 * @name unlockHDScreenShare
 * @version 0.0.3
 * @description unlock the ability to share your screen in 1080p
 * @author Ralkey#0516
 * @source https://github.com/RalkeyOfficial/discord-1080p-video-unlocker
 */

module.exports = class unlockHDScreenShare {
     
    constructor() {
        const UserStore = BdApi.Webpack.getStore("UserStore");
        this.userPremiumType = UserStore?.getCurrentUser()?.premiumType;
    }
     
    start() { 
        const UserStore = BdApi.Webpack.getStore("UserStore");
        const currentUser = UserStore?.getCurrentUser();
        if (currentUser) {
            currentUser.premiumType = 2;
        }
    }
    
    stop() {
        const UserStore = BdApi.Webpack.getStore("UserStore");
        const currentUser = UserStore?.getCurrentUser();
        if (currentUser) {
            currentUser.premiumType = this.userPremiumType;
        }
    }
}