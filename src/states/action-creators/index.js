export const depositMoney = (amount)=>{
    return (dispatch)=>{
        dispatch({
            type:'deposit',
            payload:amount
        })
    }
}

export const getData = (url)=>{
    return async (dispatch)=>{

        dispatch(getDataBegin())
        try {
            const res = await fetch(url)
            const data = await res.json()
            dispatch(getDataSuccess(data))
        } catch (err) {
            dispatch(getDataFailure(err))
        }
    }
}

export const getDataBegin = ()=>{
    return (dispatch)=>{
        dispatch({
            type:'begin'
        })
    }
}
export const getDataSuccess = (data)=>{
    return (dispatch)=>{
        dispatch({
            type:'success',
            payload:data
        })
    }
}
export const getDataFailure = (err)=>{
    return (dispatch)=>{
        dispatch({
            type:'error',
            payload:err
        })
    }
}