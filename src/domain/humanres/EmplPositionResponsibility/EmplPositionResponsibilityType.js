
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

import {EmplPositionType} from '../../humanres/EmplPosition/EmplPositionType.js';
import {ResponsibilityTypeType} from '../../humanres/ResponsibilityType/ResponsibilityTypeType.js';


const EmplPositionResponsibilityType = new GraphQLObjectType({
  name: 'EmplPositionResponsibilityType',
  description: 'Type for EmplPositionResponsibility in humanres',

  fields: () => ({
    fromDate: {type: GraphQLString},
    comments: {type: GraphQLString},
    responsibilityType: {
      type: ResponsibilityTypeType,
      args : {responsibilityTypeId: {type: GraphQLString}},
      resolve: (emplPositionResponsibility, args, {loaders}) => loaders.ofbiz.load(`humanres/responsibilityTypes/find?responsibilityTypeId=${emplPositionResponsibility.responsibilityTypeId}`)
    },
    emplPosition: {
      type: EmplPositionType,
      args : {emplPositionId: {type: GraphQLString}},
      resolve: (emplPositionResponsibility, args, {loaders}) => loaders.ofbiz.load(`humanres/emplPositions/find?emplPositionId=${emplPositionResponsibility.emplPositionId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {EmplPositionResponsibilityType};
    