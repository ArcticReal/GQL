
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

import {ValidResponsibilityType} from '../humanres/ValidResponsibility.js';
import {EmplPositionTypeClassType} from '../humanres/EmplPositionTypeClass.js';
import {EmplPositionTypeRateType} from '../humanres/EmplPositionTypeRate.js';
import {RateAmountType} from '../accounting/RateAmount.js';


const EmplPositionTypeType = new GraphQLObjectType({
  name: 'EmplPositionTypeType',
  description: 'Type for EmplPositionType in humanres',

  fields: () => ({
    parentType: {
      type: EmplPositionTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (emplPositionType, args, {loaders}) => loaders.ofbiz.load(`humanres/emplPosition/emplPositionTypes/find?emplPositionTypeId=${emplPositionType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    emplPositionTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    rateAmounts: {
      type: new GraphQLList(RateAmountType),
      args : {},
      resolve: (emplPositionType, args, {loaders}) => loaders.ofbizArray.load(`accounting/rateAmounts/find?emplPositionTypeId=${emplPositionType.emplPositionTypeId}`)
    },
    emplPositionTypeClasses: {
      type: new GraphQLList(EmplPositionTypeClassType),
      args : {},
      resolve: (emplPositionType, args, {loaders}) => loaders.ofbizArray.load(`humanres/emplPosition/emplPositionTypeClasss/find?emplPositionTypeId=${emplPositionType.emplPositionTypeId}`)
    },
    emplPositionTypes: {
      type: new GraphQLList(EmplPositionTypeType),
      args : {},
      resolve: (emplPositionType, args, {loaders}) => loaders.ofbizArray.load(`humanres/emplPosition/emplPositionTypes/find?emplPositionTypeId=${emplPositionType.emplPositionTypeId}`)
    },
    validResponsibilities: {
      type: new GraphQLList(ValidResponsibilityType),
      args : {},
      resolve: (emplPositionType, args, {loaders}) => loaders.ofbizArray.load(`humanres/validResponsibilitys/find?emplPositionTypeId=${emplPositionType.emplPositionTypeId}`)
    },
    emplPositionTypeRates: {
      type: new GraphQLList(EmplPositionTypeRateType),
      args : {},
      resolve: (emplPositionType, args, {loaders}) => loaders.ofbizArray.load(`humanres/emplPosition/emplPositionTypeRates/find?emplPositionTypeId=${emplPositionType.emplPositionTypeId}`)
    }
  })
});

export {EmplPositionTypeType};
    




const EmplPositionTypeInputType = new GraphQLInputObjectType({
  name: 'EmplPositionTypeInputType',
  description: 'input type for EmplPositionType in humanres',

  fields: () => ({
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    emplPositionTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {EmplPositionTypeInputType};
    