
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {DataResourceType} from '../content/DataResource.js';


const OtherDataResourceType = new GraphQLObjectType({
  name: 'OtherDataResourceType',
  description: 'Type for OtherDataResource in content',

  fields: () => ({
    dataResourceContent: {type: GraphQLString/*this was a byte Array TODO find a solution*/},
    dataResource: {
      type: DataResourceType,
      args : {dataResourceId: {type: GraphQLString}},
      resolve: (otherDataResource, args, {loaders}) => loaders.ofbiz.load(`content/dataResources/find?dataResourceId=${otherDataResource.dataResourceId}`)
    }
  })
});

export {OtherDataResourceType};
    




const OtherDataResourceInputType = new GraphQLInputObjectType({
  name: 'OtherDataResourceInputType',
  description: 'input type for OtherDataResource in content',

  fields: () => ({
    dataResourceContent: {type: GraphQLString/*this was a byte Array TODO find a solution*/},
    dataResourceId: {type: GraphQLString}
  })
});

export {OtherDataResourceInputType};
    