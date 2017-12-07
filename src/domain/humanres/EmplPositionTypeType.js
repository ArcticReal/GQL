
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
import {EmplPositionTypeClassType} from '../humanres/EmplPositionTypeClassType.js';
import {EmplPositionTypeRateType} from '../humanres/EmplPositionTypeRateType.js';
import {RateAmountType} from '../accounting/RateAmountType.js';


const EmplPositionTypeType = new GraphQLObjectType({
  name: 'EmplPositionTypeType',
  description: 'Type for EmplPositionType in humanres',

  fields: () => ({
    parentType: {
      type: EmplPositionTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (emplPositionType, args, {loaders}) => loaders.ofbiz.load(`emplPositionTypes/find?emplPositionTypeId=${emplPositionType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    emplPositionTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    rateAmount: {
      type: new GraphQLList(RateAmountType),
      args : {emplPositionTypeId: {type: GraphQLString}},
      resolve: (emplPositionType, args, {loaders}) => loaders.ofbizArray.load(`rateAmounts/find?emplPositionTypeId=${emplPositionType.emplPositionTypeId}`)
    },
    emplPositionTypeClass: {
      type: new GraphQLList(EmplPositionTypeClassType),
      args : {emplPositionTypeId: {type: GraphQLString}},
      resolve: (emplPositionType, args, {loaders}) => loaders.ofbizArray.load(`emplPositionTypeClasss/find?emplPositionTypeId=${emplPositionType.emplPositionTypeId}`)
    },
    emplPositionType: {
      type: new GraphQLList(EmplPositionTypeType),
      args : {emplPositionTypeId: {type: GraphQLString}},
      resolve: (emplPositionType, args, {loaders}) => loaders.ofbizArray.load(`emplPositionTypes/find?emplPositionTypeId=${emplPositionType.emplPositionTypeId}`)
    },
    validResponsibility: {
      type: new GraphQLList(ValidResponsibilityType),
      args : {emplPositionTypeId: {type: GraphQLString}},
      resolve: (emplPositionType, args, {loaders}) => loaders.ofbizArray.load(`validResponsibilitys/find?emplPositionTypeId=${emplPositionType.emplPositionTypeId}`)
    },
    emplPositionTypeRate: {
      type: new GraphQLList(EmplPositionTypeRateType),
      args : {emplPositionTypeId: {type: GraphQLString}},
      resolve: (emplPositionType, args, {loaders}) => loaders.ofbizArray.load(`emplPositionTypeRates/find?emplPositionTypeId=${emplPositionType.emplPositionTypeId}`)
    }
  })
});

export {EmplPositionTypeType};
    