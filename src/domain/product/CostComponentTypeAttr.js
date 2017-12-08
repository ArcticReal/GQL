
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

import {CostComponentTypeType} from '../product/CostComponentType.js';


const CostComponentTypeAttrType = new GraphQLObjectType({
  name: 'CostComponentTypeAttrType',
  description: 'Type for CostComponentTypeAttr in product',

  fields: () => ({
    costComponentType: {
      type: CostComponentTypeType,
      args : {costComponentTypeId: {type: GraphQLString}},
      resolve: (costComponentTypeAttr, args, {loaders}) => loaders.ofbiz.load(`costComponentTypes/find?costComponentTypeId=${costComponentTypeAttr.costComponentTypeId}`)
    },
    description: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {CostComponentTypeAttrType};
    




const CostComponentTypeAttrInputType = new GraphQLInputObjectType({
  name: 'CostComponentTypeAttrInputType',
  description: 'input type for CostComponentTypeAttr in product',

  fields: () => ({
    costComponentTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {CostComponentTypeAttrInputType};
    