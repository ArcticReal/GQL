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

const FacilityContentInputType = new GraphQLInputObjectType({
  name: 'FacilityContentInputType',
  description: 'input type for FacilityContent',

  fields: () => ({
    contentId: {type: GraphQLString},
    facilityId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {FacilityContentInputType};
    