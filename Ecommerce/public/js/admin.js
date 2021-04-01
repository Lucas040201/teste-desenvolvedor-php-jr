$(function(){

    const $deleteOrder = $('.delete__order');
    const currentUrl = window.location.href;
    const $deleteProduct =$('.delete__product');
    // const deleteUrl
    
    if($deleteOrder) {
        
        $deleteOrder.on('click', function() {
            $.ajax({
                url: currentUrl,
                method: 'DELETE',
                headers: {
                    'X-CSRF-Token': $('input[name="_token"]').val()
                },
            }).done(function(resp){
                if(resp.error === 0) {
                    window.location.replace(window.location.origin + '/admin');
                } else {
                    $('.error__delete').text('Erro ao deletar Pedido');
                }
            }).fail(function(){
                console.log('erro na requisição');
            });
        });
        
    }

    if($deleteProduct) {
        
        $deleteProduct.on('click', function() {
            $.ajax({
                url: currentUrl,
                method: 'DELETE',
                headers: {
                    'X-CSRF-Token': $('input[name="_token"]').val()
                },
            }).done(function(resp){
                if(resp.error === 0) {
                    window.location.replace(window.location.origin + '/admin');
                } else {
                    $('.error__delete').text('Erro ao deletar Produto');
                }
            }).fail(function(){
                console.log('erro na requisição');
            });
        });
        
    }


    const $massDeletion = $('.mass__deletion--order');
    const $deleteAll = $('.delete__all');

    if($massDeletion && $deleteAll){
        $deleteAll.on('click', function() {
            let ids = [];
            $massDeletion.map(function(index, element){
                if($(element).prop('checked')){
                    ids.push(parseInt($(element).val()));
                }
            });

            if(ids.length > 0){
                $.ajax({
                    url: window.location.origin + '/admin/orders',

                    method: 'DELETE',
                    headers: {
                        'X-CSRF-Token': $('input[name="_token"]').val()
                    },
                    data: {
                        id: ids
                    }
                }).done(function(resp){
                    if(resp.error === 0) {
                        document.location.reload(true);
                        window.location.replace();
                    } else {
                        console.log('error')
                    }
                }).fail(function(resp){
                    console.log('fail');
                });
            }
            
        });

    }
    
});