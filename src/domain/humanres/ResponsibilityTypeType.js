
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ValidResponsibilityType} from '../humanres/ValidResponsibilityType.js';
import {EmplPositionResponsibilityType} from '../humanres/EmplPositionResponsibilityType.js';


const ResponsibilityTypeType = new GraphQLObjectType({
  name: 'ResponsibilityTypeType',
  description: 'Type for ResponsibilityType in humanres',

  fields: () => ({
    parentType: {
      type: ResponsibilityTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (responsibilityType, args, {loaders}) => loaders.ofbiz.load(`responsibilityTypes/find?responsibilityTypeId=${responsibilityType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    responsibilityTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    validResponsibility: {
      type: new GraphQLList(ValidResponsibilityType),
      args : {responsibilityTypeId: {type: GraphQLString}},
      resolve: (responsibilityType, args, {loaders}) => loaders.ofbizArray.load(`validResponsibilitys/find?responsibilityTypeId=${responsibilityType.responsibilityTypeId}`)
    },
    responsibilityType: {
      type: new GraphQLList(ResponsibilityTypeType),
      args : {responsibilityTypeId: {type: GraphQLString}},
      resolve: (responsibilityType, args, {loaders}) => loaders.ofbizArray.load(`responsibilityTypes/find?responsibilityTypeId=${responsibilityType.responsibilityTypeId}`)
    },
    emplPositionResponsibility: {
      type: new GraphQLList(EmplPositionResponsibilityType),
      args : {responsibilityTypeId: {type: GraphQLString}},
      resolve: (responsibilityType, args, {loaders}) => loaders.ofbizArray.load(`emplPositionResponsibilitys/find?responsibilityTypeId=${responsibilityType.responsibilityTypeId}`)
    }
  })
});

export {ResponsibilityTypeType};
    