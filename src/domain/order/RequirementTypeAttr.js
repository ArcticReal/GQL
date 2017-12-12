
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

import {RequirementTypeType} from '../order/RequirementType.js';


const RequirementTypeAttrType = new GraphQLObjectType({
  name: 'RequirementTypeAttrType',
  description: 'Type for RequirementTypeAttr in order',

  fields: () => ({
    requirementType: {
      type: RequirementTypeType,
      args : {requirementTypeId: {type: GraphQLString}},
      resolve: (requirementTypeAttr, args, {loaders}) => loaders.ofbiz.load(`order/requirement/requirementTypes/find?requirementTypeId=${requirementTypeAttr.requirementTypeId}`)
    },
    description: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {RequirementTypeAttrType};
    




const RequirementTypeAttrInputType = new GraphQLInputObjectType({
  name: 'RequirementTypeAttrInputType',
  description: 'input type for RequirementTypeAttr in order',

  fields: () => ({
    requirementTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {RequirementTypeAttrInputType};
    