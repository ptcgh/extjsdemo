/**
 * icon_prefix font字体前缀定义
 * baseConfig 全局配置
 */
var icon_prefix = " fa blue-color ", baseConfig = {
    /**
     * 全局常量定义
     */
    cons: {
        noimage: 'app/resource/images/noimage.jpg',
        /**
         * 静态服务器的地址
         */
        static_server: ''
    },
    /**
     * 渲染器
     */
    renders: {
        trueText: '<i   class=" fa fa-lg fa-check green-color"></i>',
        falseText: '<i   class=" fa fa-lg fa-close red-color"></i>',
        cancel: '<i class=" fa fa-lg fa-undo"></i>'
    },
    /**
     * 图标定义
     */
    appicon: {
        home: icon_prefix + 'fa-home',
        add: icon_prefix + "fa-plus",
        update: icon_prefix + "fa-edit",
        trash: icon_prefix + "fa-trash",
        delete: icon_prefix + "fa-remove red-color",
        set_wallpaper: icon_prefix + "fa-image",
        setting: icon_prefix + "fa-gears",
        desktop: icon_prefix + "fa-desktop",
        pailie: icon_prefix + "fa-cubes",
        logout: icon_prefix + "fa-power-off",
        avatar: icon_prefix + "fa-photo",
        key: icon_prefix + "fa-key",
        user: icon_prefix + "fa-user",
        refresh: icon_prefix + "fa-refresh blue-color",
        close: icon_prefix + "fa-close",
        male: icon_prefix + 'fa-male',
        female: icon_prefix + 'fa-female',
        role: icon_prefix + 'fa-users',
        user_add: icon_prefix + "fa-user-plus",
        undo: icon_prefix + 'fa-undo',
        search: icon_prefix + 'fa-search',
        reset: icon_prefix + 'fa-retweet',
        yes: icon_prefix + 'fa-check green-color',
        no: icon_prefix + 'fa-close red-color',
        list_ol: icon_prefix + ' fa-list-ol',
        list_alt: icon_prefix + ' fa-list-alt',
        ban: icon_prefix + "fa-ban",
        log: icon_prefix + "fa-tty",
        printer: icon_prefix + "fa-print",
        fax: icon_prefix + "fa-fax",
        download: icon_prefix + "fa-cloud-download",
        upload: icon_prefix + "fa-cloud-upload",
        comment: icon_prefix + " fa-commenting-o",
        credit: icon_prefix + "fa fa-gift"
    },
    /**
     * 模型定义
     */
    model: {
        /**
         * 系统用户模型
         */
        user: {
            id: 'ID',
            username: '用户名',
            real_name: '真实姓名'
        }
    }
};