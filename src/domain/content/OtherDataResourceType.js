
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {DataResourceType} from '../content/DataResourceType.js';


const OtherDataResourceType = new GraphQLObjectType({
  name: 'OtherDataResourceType',
  description: 'Type for OtherDataResource in content',

  fields: () => ({
    dataResourceContent: {type: GraphQLString/*this was a byte Array TODO find a solution*/},
    dataResource: {
      type: DataResourceType,
      args : {dataResourceId: {type: GraphQLString}},
      resolve: (otherDataResource, args, {loaders}) => loaders.ofbiz.load(`dataResources/find?dataResourceId=${otherDataResource.dataResourceId}`)
    }
  })
});

export {OtherDataResourceType};
    