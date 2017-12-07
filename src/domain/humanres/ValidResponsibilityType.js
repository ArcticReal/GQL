
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {EmplPositionTypeType} from '../humanres/EmplPositionTypeType.js';
import {ResponsibilityTypeType} from '../humanres/ResponsibilityTypeType.js';


const ValidResponsibilityType = new GraphQLObjectType({
  name: 'ValidResponsibilityType',
  description: 'Type for ValidResponsibility in humanres',

  fields: () => ({
    fromDate: {type: GraphQLString},
    comments: {type: GraphQLString},
    responsibilityType: {
      type: ResponsibilityTypeType,
      args : {responsibilityTypeId: {type: GraphQLString}},
      resolve: (validResponsibility, args, {loaders}) => loaders.ofbiz.load(`responsibilityTypes/find?responsibilityTypeId=${validResponsibility.responsibilityTypeId}`)
    },
    emplPositionType: {
      type: EmplPositionTypeType,
      args : {emplPositionTypeId: {type: GraphQLString}},
      resolve: (validResponsibility, args, {loaders}) => loaders.ofbiz.load(`emplPositionTypes/find?emplPositionTypeId=${validResponsibility.emplPositionTypeId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ValidResponsibilityType};
    