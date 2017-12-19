
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

import {CostComponentType} from '../../product/CostComponent/CostComponentType.js';


const CostComponentAttributeType = new GraphQLObjectType({
  name: 'CostComponentAttributeType',
  description: 'Type for CostComponentAttribute in product',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    attrName: {type: GraphQLString},
    costComponent: {
      type: CostComponentType,
      args : {costComponentId: {type: GraphQLString}},
      resolve: (costComponentAttribute, args, {loaders}) => loaders.ofbiz.load(`product/costComponents/find?costComponentId=${costComponentAttribute.costComponentId}`)
    }
  })
});

export {CostComponentAttributeType};
    