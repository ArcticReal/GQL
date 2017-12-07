
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {RequirementTypeType} from '../order/RequirementTypeType.js';


const RequirementTypeAttrType = new GraphQLObjectType({
  name: 'RequirementTypeAttrType',
  description: 'Type for RequirementTypeAttr in order',

  fields: () => ({
    requirementType: {
      type: RequirementTypeType,
      args : {requirementTypeId: {type: GraphQLString}},
      resolve: (requirementTypeAttr, args, {loaders}) => loaders.ofbiz.load(`requirementTypes/find?requirementTypeId=${requirementTypeAttr.requirementTypeId}`)
    },
    description: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {RequirementTypeAttrType};
    