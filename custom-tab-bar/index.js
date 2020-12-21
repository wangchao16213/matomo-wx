Component({
	data: {
		active: 0,
		list: [
			{
				icon: 'friends-o',
				text: '访客分析',
				url: '../visitor/visitor'
			},
			{
				icon: 'search',
				text: '行为分析',
				url: '../behavior/behavior'
			},
			{
				icon: 'exchange',
				text: '获客分析',
				url: '../channel/channel'
			},
			{
				icon: 'filter-o',
				text: '转化分析',
				url: '../conversion/conversion'
			}
		]
	},

	methods: {
		onChange(event) {
			this.setData({ active: event.detail });
			wx.setStorageSync('pageActive', event.detail);
			wx.switchTab({
				url: this.data.list[event.detail].url
			});
		},

		init() {
			var pageActive = wx.getStorageSync('pageActive');
			if(pageActive === null){
				pageActive = 0;
				wx.setStorageSync('pageActive', 0);
			}
			this.setData({
				active: pageActive
			});
		}
	}
});
