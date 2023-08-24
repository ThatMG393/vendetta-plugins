(function(d,a,n,r,g,R){"use strict";const{View:P,Text:c,Pressable:C}=a.findByProps("Button","Text","View"),h=a.findByProps("extractTimestamp"),o=n.stylesheet.createThemedStyleSheet({container:{flex:1,padding:16,alignItems:"center",justifyContent:"center"},title:{fontFamily:n.constants.Fonts.PRIMARY_SEMIBOLD,fontSize:24,textAlign:"left",color:g.semanticColors.HEADER_PRIMARY,paddingVertical:25},text:{flex:1,flexDirection:"row",fontSize:16,textAlign:"justify",color:g.semanticColors.HEADER_PRIMARY},dateContainer:{height:16,alignSelf:"baseline"}});function f(t){let{date:e}=t;return React.createElement(C,{style:o.dateContainer,onPress:function(){n.toasts.open({content:n.moment(e).toLocaleString(),source:R.getAssetByName("clock").id})},onLongPress:function(){n.clipboard.setString(e.getTime().toString()),n.toasts.open({content:"Copied to clipboard"})}},React.createElement(c,{style:o.text},n.moment(e).fromNow()))}function m(t){let{channel:e}=t;return React.createElement(P,{style:o.container},React.createElement(c,{style:o.title},"This channel is hidden.",`

`),React.createElement(c,{style:o.text},"Topic: ",e.topic||"No topic.",`
`),React.createElement(c,{style:o.text},"Creation Date: "),React.createElement(f,{date:new Date(h.extractTimestamp(e.id))}),React.createElement(c,null,e.lastMessageId?React.createElement(f,{date:new Date(h.extractTimestamp(e.lastMessageId))}):"No messages.",`
`,e.lastPinTimestamp?React.createElement(f,{date:new Date(e.lastPinTimestamp)}):"No pins."))}let l=[];const E=a.findByProps("getChannelPermissions","can"),T=a.findByProps("transitionToGuild"),x=a.findByProps("stores","fetchMessages"),{ChannelTypes:u}=a.findByProps("ChannelTypes"),{getChannel:M}=a.findByProps("getChannel"),A=[u.DM,u.GROUP_DM,u.GUILD_CATEGORY];function p(t){if(t==null||(typeof t=="string"&&(t=M(t)),!t||A.includes(t.type)))return!1;t.realCheck=!0;let e=!E.can(n.constants.Permissions.VIEW_CHANNEL,t);return delete t.realCheck,e}function B(){const t=a.findByName("MessagesWrapperConnected",!1);l.push(r.after("can",E,function(e,s){let[i,y]=e;return!y?.realCheck&&i===n.constants.Permissions.VIEW_CHANNEL?!0:s})),l.push(r.instead("transitionToGuild",T,function(e,s){const[i,y]=e;!p(y)&&typeof s=="function"&&s(e)})),l.push(r.instead("fetchMessages",x,function(e,s){const[i]=e;!p(i)&&typeof s=="function"&&s(e)})),l.push(r.instead("default",t,function(e,s){const i=e[0]?.channel;return!p(i)&&typeof s=="function"?s(...e):n.React.createElement(m,{channel:i})}))}var D={onLoad:B,onUnload:function(){for(const t of l)t()}};return d.default=D,Object.defineProperty(d,"__esModule",{value:!0}),d})({},vendetta.metro,vendetta.metro.common,vendetta.patcher,vendetta.ui,vendetta.ui.assets);
