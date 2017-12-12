
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

import {ContainerType} from '../product/Container.js';


const ContainerTypeType = new GraphQLObjectType({
  name: 'ContainerTypeType',
  description: 'Type for ContainerType in product',

  fields: () => ({
    containerTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    containers: {
      type: new GraphQLList(ContainerType),
      args : {},
      resolve: (containerType, args, {loaders}) => loaders.ofbizArray.load(`product/containers/find?containerTypeId=${containerType.containerTypeId}`)
    }
  })
});

export {ContainerTypeType};
    




const ContainerTypeInputType = new GraphQLInputObjectType({
  name: 'ContainerTypeInputType',
  description: 'input type for ContainerType in product',

  fields: () => ({
    containerTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {ContainerTypeInputType};
    