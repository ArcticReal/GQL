
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

import {CostComponentType} from '../product/CostComponent.js';


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
      resolve: (costComponentAttribute, args, {loaders}) => loaders.ofbiz.load(`costComponents/find?costComponentId=${costComponentAttribute.costComponentId}`)
    }
  })
});

export {CostComponentAttributeType};
    




const CostComponentAttributeInputType = new GraphQLInputObjectType({
  name: 'CostComponentAttributeInputType',
  description: 'input type for CostComponentAttribute in product',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    attrName: {type: GraphQLString},
    costComponentId: {type: GraphQLString}
  })
});

export {CostComponentAttributeInputType};
    