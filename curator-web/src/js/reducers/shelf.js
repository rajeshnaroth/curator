import {GET_FRESH_LIST_SUCCESS } from '../actions'

const shelf = (state = {}, action) => {
  switch (action.type) {

    case GET_FRESH_LIST_SUCCESS:
      console.log("shelf.js: ", action);
              
      return action.result;

    default:
      console.log("shelf.js: default ", action);
      return []
      /*
    {
        genre:'Drama',
        films:[
            {id: 'AejUBPX2Qe0', title:'Flame', rating:4, views:2000, description:'Love calls. Will you answer?'},
            {id: 'gGYXSRD56wE', title:'Click', rating:3, views:200, description:'That\'s all it takes'},
            {id: '7oJUOsgoplQ', title:'Max', rating:5, views:65429, description:'Some decisions are tough'},
            {id: 'XfSdf_nV77o', title:'Status Change', rating:4, views:2000, description:'Vanessa becker makes an important staus change'},
            {id: 'TFHafo91dJg', title:'Mom for Sale', rating:3, views:200, description:'Jacob buys a mom from craigslist'},
            {id: 'ul9m4oZkeU4', title:'Heatwave', rating:3, views:200, description:'Sally is having a bad day'}
        ]
    },
    {
        genre:'Other',
        films:[
            {id: 'XfSdf_nV77o', title:'Status Change', rating:4, views:2000, description:'Vanessa becker makes an important staus change'},
            {id: 'TFHafo91dJg', title:'Mom for Sale', rating:3, views:200, description:'Jacob buys a mom from craigslist'}
        ]
    }
	];*/
  }
};
export default shelf