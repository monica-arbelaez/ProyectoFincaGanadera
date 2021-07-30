import React from 'react'
import clienteAxios from '../../infrastucture/api/axios';
import ListPasture from '../components/ListPasture'
import '../css/style.css'

export default class Pastures extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pastureList: [],
            loadingPastures: false,
            readError: null,
        }
    }

    async componentDidMount() {
        this.setState({ readError: null, loadingPastures: true });
        try {
            const data = await (await clienteAxios.get('/sort-by-pasture')).data;
            const listPasture = [];
            const listData = [];
            listPasture.push(data.data)
            listPasture.map(data => {
                data.map(list => {
                    listData.push(list)
                })
            })
            this.setState({ pastureList: listData })



        } catch (error) {
            this.setState({ readError: error.message, loadingPastures: false });
        }
    }
    render() {
        return (
            <div className="album pastures ">
                <div className="container target">
                    <ListPasture pastures={this.state.pastureList} />
                    {
                        console.log(this.state.pastureList)
                    }
                </div>
            </div>
        )
    }
}