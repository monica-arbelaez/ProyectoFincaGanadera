import React from 'react'
import clienteAxios from '../../infrastucture/api/axios';
import ListAnimalByPasture from '../components/ListAnimalByPasture'
import '../css/style.css'

export default class AnimalsByPasture extends React.Component {
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
            const listData = [];
            data.data.forEach((data) => {
                listData.push(data)
            });
            this.setState({ pastureList: listData })
        } catch (error) {
            this.setState({ readError: error.message, loadingPastures: false });
        }
    }
    render() {
        return (
            <div className="album pastures ">
                <div className="container target">
                    <ListAnimalByPasture pastures={this.state.pastureList} />
                </div>
            </div>
        )
    }
}