import * as $ from 'jquery'

function createAnalytics(): object{
    let counter = 0;
    let isDestroyed = false;

    const listener = (): number => counter++

    $(document as any).on('click', listener)

    return {
        destroy(){
            document.removeEventListener('click', listener);
            isDestroyed = true;
        },
        getClick(){
            if (isDestroyed){
                return 'Analytics is destroyed!'
            }
            return counter;
        }
    }
}

window['analytics'] = createAnalytics();