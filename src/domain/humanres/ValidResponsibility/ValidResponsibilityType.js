
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

import {EmplPositionTypeType} from '../../humanres/EmplPositionType/EmplPositionTypeType.js';
import {ResponsibilityTypeType} from '../../humanres/ResponsibilityType/ResponsibilityTypeType.js';


const ValidResponsibilityType = new GraphQLObjectType({
  name: 'ValidResponsibilityType',
  description: 'Type for ValidResponsibility in humanres',

  fields: () => ({
    fromDate: {type: GraphQLString},
    comments: {type: GraphQLString},
    responsibilityType: {
      type: ResponsibilityTypeType,
      args : {responsibilityTypeId: {type: GraphQLString}},
      resolve: (validResponsibility, args, {loaders}) => loaders.ofbiz.load(`humanres/responsibilityTypes/find?responsibilityTypeId=${validResponsibility.responsibilityTypeId}`)
    },
    emplPositionType: {
      type: EmplPositionTypeType,
      args : {emplPositionTypeId: {type: GraphQLString}},
      resolve: (validResponsibility, args, {loaders}) => loaders.ofbiz.load(`humanres/emplPosition/emplPositionTypes/find?emplPositionTypeId=${validResponsibility.emplPositionTypeId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ValidResponsibilityType};
    