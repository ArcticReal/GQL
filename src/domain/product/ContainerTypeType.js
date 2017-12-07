
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ContainerType} from '../product/ContainerType.js';


const ContainerTypeType = new GraphQLObjectType({
  name: 'ContainerTypeType',
  description: 'Type for ContainerType in product',

  fields: () => ({
    containerTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    container: {
      type: new GraphQLList(ContainerType),
      args : {containerTypeId: {type: GraphQLString}},
      resolve: (containerType, args, {loaders}) => loaders.ofbizArray.load(`containers/find?containerTypeId=${containerType.containerTypeId}`)
    }
  })
});

export {ContainerTypeType};
    