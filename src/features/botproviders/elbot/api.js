class BotApi {

    constructor() {
        
        this.cors_proxy = process.env.REACT_APP_CORS_PROXY || 'https://cors-anywhere.herokuapp.com/';
        this.url = "https://elbot-e.artificial-solutions.com/cgi-bin/elbot.cgi";
        this.images_url = "https://elbot-e.artificial-solutions.com";

        if(this.cors_proxy){
            this.url = `${this.cors_proxy}${this.url}`;
        }
        
        this.talkParams = null;
        this.talkParamNames = ['IDENT', 'USERLOGID', 'EXTRAINPUT'];
        this.ask = this.ask.bind(this);
        this.conversationInitialStartMark = '<!-- Begin Response !--> <!-- Country:   -->';
        this.conversationStartMark = '<!-- Begin Response !-->';
        this.conversationEndMark = '<!-- End Response !-->';

    }

    ask(question=""){

        const _this = this;
        const isInitial = this.talkParams === null;

        
        const endMark = this.conversationEndMark;

        const thisReqParams = isInitial ? {} : Object.assign({}, this.talkParams);

        if(!isInitial){
            const randomInt = parseInt(10 + 20 * Math.random());
            thisReqParams['ENTRY'] = question;
            thisReqParams['send.x'] = randomInt;
            thisReqParams['send.y'] = randomInt;
            thisReqParams['EXTRAINPUT'] += question.length;            
        }

        return fetch(this.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: isInitial ? "": Object.entries(thisReqParams).map(kv => kv.map(encodeURIComponent).join("=")).join("&") 
        }).then(resp => {
            return resp.text();
        }).then(data => {

            let newDocument = document.implementation.createHTMLDocument('Elbot response');
            let dom =  newDocument.createElement('html');
            dom.innerHTML = data;
            

            const imgurl_parts = dom.getElementsByTagName('img')[0].src.split('/');
            const img_url = `${imgurl_parts.slice(imgurl_parts.length-3).join('/')}`;
                
            this.talkParams = {};
            
            this.talkParamNames.forEach(paramName => {
                _this.talkParams[paramName] = dom.querySelector(`input[name='${paramName}']`).value;
            });            
        
            const startMark = data.indexOf(_this.conversationInitialStartMark) !== -1 
                                                ? _this.conversationInitialStartMark: _this.conversationStartMark;
            const text = data.slice(data.indexOf(startMark) + startMark.length, data.indexOf(endMark));

            return {
                success: true,
                text: text,
                img: img_url
            };  

        }).catch(e => {
            console.log(e);
            return {
                success: false,
                text: e
            };
        });

    }

}

export default BotApi;