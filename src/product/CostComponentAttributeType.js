
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {CostComponent} from '../product/CostComponent.js';


const CostComponentAttribute = new GraphQLObjectType({
  name: 'CostComponentAttributeType',
  description: 'Type for CostComponentAttribute in product',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrValue: {type: GraphQLInt},
    attrName: {type: GraphQLString},
    costComponent: {
      type: CostComponentType,
      args : {costComponentId: {type: GraphQLString}},
      resolve: (costComponentAttribute, args, {loaders}) => loaders.ofbizArray.load(`costComponents/find?=${args.costComponentId}`)
    }
  })
});

export {CostComponentAttribute};
    