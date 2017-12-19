
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

import {RequirementType} from '../../order/Requirement/RequirementType.js';
import {RequirementTypeAttrType} from '../../order/RequirementTypeAttr/RequirementTypeAttrType.js';


const RequirementTypeType = new GraphQLObjectType({
  name: 'RequirementTypeType',
  description: 'Type for RequirementType in order',

  fields: () => ({
    requirementTypeId: {type: GraphQLString},
    parentType: {
      type: RequirementTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (requirementType, args, {loaders}) => loaders.ofbiz.load(`order/requirement/requirementTypes/find?requirementTypeId=${requirementType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    requirements: {
      type: new GraphQLList(RequirementType),
      args : {},
      resolve: (requirementType, args, {loaders}) => loaders.ofbizArray.load(`order/requirements/find?requirementTypeId=${requirementType.requirementTypeId}`)
    },
    requirementTypes: {
      type: new GraphQLList(RequirementTypeType),
      args : {},
      resolve: (requirementType, args, {loaders}) => loaders.ofbizArray.load(`order/requirement/requirementTypes/find?requirementTypeId=${requirementType.requirementTypeId}`)
    },
    requirementTypeAttrs: {
      type: new GraphQLList(RequirementTypeAttrType),
      args : {},
      resolve: (requirementType, args, {loaders}) => loaders.ofbizArray.load(`order/requirement/requirementTypeAttrs/find?requirementTypeId=${requirementType.requirementTypeId}`)
    }
  })
});

export {RequirementTypeType};
    