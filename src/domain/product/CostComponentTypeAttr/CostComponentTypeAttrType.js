
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

import {CostComponentTypeType} from '../../product/CostComponentType/CostComponentTypeType.js';


const CostComponentTypeAttrType = new GraphQLObjectType({
  name: 'CostComponentTypeAttrType',
  description: 'Type for CostComponentTypeAttr in product',

  fields: () => ({
    costComponentType: {
      type: CostComponentTypeType,
      args : {costComponentTypeId: {type: GraphQLString}},
      resolve: (costComponentTypeAttr, args, {loaders}) => loaders.ofbiz.load(`product/costComponent/costComponentTypes/find?costComponentTypeId=${costComponentTypeAttr.costComponentTypeId}`)
    },
    description: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {CostComponentTypeAttrType};
    