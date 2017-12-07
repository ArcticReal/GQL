
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {RequirementType} from '../order/RequirementType.js';
import {RequirementTypeAttrType} from '../order/RequirementTypeAttrType.js';


const RequirementTypeType = new GraphQLObjectType({
  name: 'RequirementTypeType',
  description: 'Type for RequirementType in order',

  fields: () => ({
    requirementTypeId: {type: GraphQLString},
    parentType: {
      type: RequirementTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (requirementType, args, {loaders}) => loaders.ofbiz.load(`requirementTypes/find?requirementTypeId=${requirementType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    requirement: {
      type: new GraphQLList(RequirementType),
      args : {requirementTypeId: {type: GraphQLString}},
      resolve: (requirementType, args, {loaders}) => loaders.ofbizArray.load(`requirements/find?requirementTypeId=${requirementType.requirementTypeId}`)
    },
    requirementType: {
      type: new GraphQLList(RequirementTypeType),
      args : {requirementTypeId: {type: GraphQLString}},
      resolve: (requirementType, args, {loaders}) => loaders.ofbizArray.load(`requirementTypes/find?requirementTypeId=${requirementType.requirementTypeId}`)
    },
    requirementTypeAttr: {
      type: new GraphQLList(RequirementTypeAttrType),
      args : {requirementTypeId: {type: GraphQLString}},
      resolve: (requirementType, args, {loaders}) => loaders.ofbizArray.load(`requirementTypeAttrs/find?requirementTypeId=${requirementType.requirementTypeId}`)
    }
  })
});

export {RequirementTypeType};
    