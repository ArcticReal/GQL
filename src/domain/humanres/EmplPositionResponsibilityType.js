
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {EmplPositionType} from '../humanres/EmplPositionType.js';
import {ResponsibilityTypeType} from '../humanres/ResponsibilityTypeType.js';


const EmplPositionResponsibilityType = new GraphQLObjectType({
  name: 'EmplPositionResponsibilityType',
  description: 'Type for EmplPositionResponsibility in humanres',

  fields: () => ({
    fromDate: {type: GraphQLString},
    comments: {type: GraphQLString},
    responsibilityType: {
      type: ResponsibilityTypeType,
      args : {responsibilityTypeId: {type: GraphQLString}},
      resolve: (emplPositionResponsibility, args, {loaders}) => loaders.ofbiz.load(`responsibilityTypes/find?responsibilityTypeId=${emplPositionResponsibility.responsibilityTypeId}`)
    },
    emplPosition: {
      type: EmplPositionType,
      args : {emplPositionId: {type: GraphQLString}},
      resolve: (emplPositionResponsibility, args, {loaders}) => loaders.ofbiz.load(`emplPositions/find?emplPositionId=${emplPositionResponsibility.emplPositionId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {EmplPositionResponsibilityType};
    